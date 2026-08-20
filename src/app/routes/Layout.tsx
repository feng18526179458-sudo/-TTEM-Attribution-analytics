import { useState } from "react";
import { Outlet } from "react-router";
import {
  KsIconBell,
  KsIconHelp,
} from "@fe-infra/keystone-icons-react";
import {
  AppHeader,
  HeaderIconButton,
  HeaderAccountDropdown,
  HeaderSearchInput,
  GlobalNav,
} from "../components/app-header";
import { Logo } from "../components/logo";
import { CouponIcon } from "../components/CouponIcon";
import { RailNav } from "../components/rail-nav";

export default function Layout() {
  const [globalNavOpen, setGlobalNavOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <AppHeader
        logo={<Logo name="AdsManager" />}
        userInitial="F"
        onMenuClick={() => setGlobalNavOpen((prev) => !prev)}
        trailingActions={
          <>
            <HeaderSearchInput />
            <HeaderAccountDropdown label="[Demo] Attribution analytics" />
            <div className="flex items-center gap-3">
              <HeaderIconButton
                icon={<KsIconBell size={24} />}
                ariaLabel="Notifications"
              />
              <HeaderIconButton
                icon={<KsIconHelp size={24} />}
                ariaLabel="Help"
              />
            </div>
            <CouponIcon />
          </>
        }
      />

      <GlobalNav
        open={globalNavOpen}
        onClose={() => setGlobalNavOpen(false)}
      />

      <RailNav />
      <main className="min-h-screen pt-[68px] pl-[60px] bg-neutral-surface3">
        <div className="mx-auto flex min-h-[calc(100vh-68px)] max-w-[1366px] flex-col px-8 pt-0">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
