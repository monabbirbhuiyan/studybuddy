import { getServerSession } from "@/actions/get-session";
import SettingsContainer from "@/components/settings/settings-container";

import { unauthorized } from "next/navigation";

const SettingsPage = async () => {
  const session = await getServerSession();
  const user = session?.user;

  if (!user) {
    unauthorized();
  }

  return (
    <div>
      <SettingsContainer user={user} />
    </div>
  );
};

export default SettingsPage;
