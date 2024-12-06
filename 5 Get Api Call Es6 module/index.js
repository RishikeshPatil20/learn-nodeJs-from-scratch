
import axios from "axios";

const Solution = async () => {
  try {
    const response = await axios.get("https://api.codingninjas.com/api/v3/event_tags");
    console.log(response.data);
  } catch (err) {
    console.error(err);
  }
};

Solution();
module.exports = Solution;