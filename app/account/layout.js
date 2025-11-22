import SideNavigation from "../_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-[9rem_1fr] h-full gap-2 sm:grid-cols-[16rem_1fr] sm:gap-12">
      <SideNavigation />
      <div className="py-1">{children}</div>
    </div>
  );
}
