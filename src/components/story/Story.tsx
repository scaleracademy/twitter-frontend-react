import { FC } from "react";

interface StoryPropsType {
  name: string;
  iconUrl: string;
  isLoading: boolean;
  error: boolean;
  isAddStory: boolean;
}

export const Story: FC<StoryPropsType> = (props) => {
  return props.isAddStory ? (
    <div className="my_story">
      <div className="add_story">
        <div className="add_wrapper">
          <h2 className="add_icon">+</h2>
        </div>
      </div>
      <p className="story_name">{props.name}</p>
    </div>
  ) : (
    <div className="story__wrapper">
      <div className="story_image_wrapper">
        <img className="story_image" src={props.iconUrl} alt={props.name} />
      </div>
      <div className="story_name">{props.name}</div>
    </div>
  );
};
