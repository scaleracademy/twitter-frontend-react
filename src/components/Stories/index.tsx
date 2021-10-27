import { data } from "./storiesData";
import "./style.scss";

export const Stories = () => {
  return (
    <div className="stories">
      <MyStory />
      {data.map((item) => (
        <div className="story" key={item.name}>
          <div className="storyimagewrapper">
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <p className="storyname"> {item.name}</p>
        </div>
      ))}
    </div>
  );
};

const MyStory = () => {
  return (
    <div className="mystory">
      <div className="addstory">
        <div className="addwrapper">
          <h2>+</h2>
        </div>
      </div>
      <p className="storyname">You</p>
    </div>
  );
};
