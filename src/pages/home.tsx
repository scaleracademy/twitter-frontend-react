import { useSelector } from "react-redux";
import { RootReducerType } from "Types/reducer/rootReducerType";

import { Stories } from "../components/Stories";

const Home = (): JSX.Element => {
  const userDetails = useSelector(
    (state: RootReducerType) => state.userDetails
  );

  return (
    <>
      <Stories />
      <p>Reducer Values</p>
      <ul>
        {Object.entries(userDetails).map((val, index) => (
          <li key={`user-detail-${index}`}>
            {val[0]}: {val[1]}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
