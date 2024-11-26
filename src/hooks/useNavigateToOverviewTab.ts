import useActiveTabStore from "@/store/useActiveTabStore";

const useNavigateToOverviewTab = () => {
  const setActiveTab = useActiveTabStore((state) => state.setActiveTab);

  const navigateToOverviewTab = () => {
    setActiveTab("overview");
  };

  return navigateToOverviewTab;
};

export default useNavigateToOverviewTab;
