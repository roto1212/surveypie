import { useParams } from "react-router-dom";

function useStep() {
  const { step } = useParams();
  return parseInt(step);
}

export default useStep;

