import useLoginStore from "./modules/login";

const useStore = () => {
  return {
    login: useLoginStore()
  };
};

export default useStore;
