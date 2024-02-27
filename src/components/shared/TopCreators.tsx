import { useGetUsers } from "@/lib/react-query/queriesAndMutations";
import Loader from "./Loader";
import UserCard from "./UserCard";
import { Models } from "appwrite";

const TopCreators = () => {
    const {data: creators, isLoading} = useGetUsers()
    return (
        <div className="right-sidebar">
          <div className="">
            <h2 className="h3-bold md:h2-bold text-left w-full">Top Creators</h2>
            {isLoading && !creators ? (
              <Loader />
            ) : (
              <ul className="grid grid-cols-2 gap-3 pt-5">
                {creators?.documents.map((creator: Models.Document) => (
                  <li key={creator?.$id} className="flex-1 min-w-[10vw] w-full">
                    <UserCard user={creator} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      );
}

export default TopCreators