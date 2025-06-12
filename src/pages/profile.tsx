import type { NextPageWithLayout } from './_app';
import AppLayout from '@/layouts/AppLayout';

const ProfilePage: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Profil Saya</h1>
      <div className="mt-6 p-6 bg-white rounded-lg shadow">
        <p>Detail profil pengguna akan ditampilkan di sini.</p>
      </div>
    </div>
  );
};

ProfilePage.getLayout = function getLayout(page) {
  return <AppLayout>{page}</AppLayout>;
};

export default ProfilePage;
