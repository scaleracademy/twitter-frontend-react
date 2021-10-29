import { UserStoryData } from "./UserStoryData";
import { Story } from "./Story";
import "./style.scss";

export const Stories = () => {
  return (
    <div className="story__cmpt">
      {UserStoryData.map((item) => (
        <Story
          key={item.name}
          name={item.name}
          iconUrl={item.imageUrl}
          isLoading={false}
          error={false}
          isAddStory={item.isAddStory}
        />
      ))}
    </div>
  );
};
