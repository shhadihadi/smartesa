import useFetch from "../useFetch";

const NumPosts = () => {
const { data: team } = useFetch('http://localhost:8000/team');
const NumPosts = team?team.length:null;
return { NumPosts };
}
export default NumPosts