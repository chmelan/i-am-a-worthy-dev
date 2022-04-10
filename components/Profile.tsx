import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

const Profile = () => {
  const { data, error } = useSWR("/api/users", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  console.table(data);
  return (
    <div>
      <h1>IT WORKS!</h1>
    </div>
  );
};

export default Profile;
