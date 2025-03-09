import useCurrentQuestion from "./useCurrentQuestion";

function useRequiredOption() {
  const question = useCurrentQuestion();
  const { required = false } = question;
  return required;
}

export default useRequiredOption;
