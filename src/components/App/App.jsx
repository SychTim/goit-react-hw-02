import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import "./App.css";

function App() {
  const [feedBags, setFeedBags] = useState(() => {
    const localFeedBags = window.localStorage.getItem("feedBags");

    if (localFeedBags !== null) {
      return JSON.parse(localFeedBags);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  const totalFeedback = feedBags.good + feedBags.neutral + feedBags.bad;
  const positiveFeedback = Math.round((feedBags.good / totalFeedback) * 100);

  function updateFeedback(feedbackType) {
    setFeedBags({
      ...feedBags,

      [feedbackType]: feedBags[feedbackType] + 1,
    });
  }

  function reset() {
    setFeedBags({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  useEffect(
    () => window.localStorage.setItem("feedBags", JSON.stringify(feedBags)),
    [feedBags]
  );

  return (
    <>
      <Description />
      <Options
        setData={updateFeedback}
        totalFeedback={totalFeedback}
        reset={reset}
      />
      {totalFeedback > 0 ? (
        <Feedback
          data={feedBags}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
