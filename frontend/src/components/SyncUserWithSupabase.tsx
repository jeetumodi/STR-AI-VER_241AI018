import { useEffect, useRef } from 'react';
import { useUser } from '@clerk/clerk-react';
import supabase from '@/lib/supabase';

export default function SyncUserWithSupabase() {
  const { isSignedIn, user } = useUser();
  const hasSynced = useRef(false);

  useEffect(() => {
    const syncUser = async () => {
      if (!isSignedIn || !user || hasSynced.current) return;

      const clerkUserId = user.id;
      const email = user.primaryEmailAddress?.emailAddress || '';
      const name = `${user.firstName || ''} ${user.lastName || ''}`.trim();

      try {
        // Check if the user already exists
        const { data: existingUser, error: selectError } = await supabase
          .from('users')
          .select('clerk_user_id')
          .eq('clerk_user_id', clerkUserId)
          .maybeSingle();

        if (selectError) {
          console.error('Error checking user:', selectError);
          return;
        }

        if (!existingUser) {
          // Insert if not exists
          const { error: insertError } = await supabase.from('users').insert([
            {
              clerk_user_id: clerkUserId,
              email,
              name,
            },
          ]);

          if (insertError) {
            console.error('Error inserting user into Supabase:', insertError);
            return;
          }

          console.log('✅ User successfully synced to Supabase.');
        } else {
          console.log('ℹ️ User already exists in Supabase.');
        }

        hasSynced.current = true;
      } catch (err) {
        console.error('Unexpected error syncing user:', err);
      }
    };

    syncUser();
  }, [isSignedIn, user]);

  return null;
}
