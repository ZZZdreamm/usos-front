import { News } from "../../models/News";
import "./NewsBox.scss";

interface NewsProps {
    news: News[
        {date: 'today'
        title: "Nothing important",
        content: "No idea"}
    ];
  }


export const NewsBox = ({news}: NewsProps) => {
    return (
      <>
        <div className="newsBox">
            {news && news.map((info) => (
                <>
                Hi
                {info.title}
                </>
            ))}
        </div>
      </>
    );
  };