import { UserProfile } from "@clerk/nextjs";

export default function Page() {
	return <UserProfile path="/user-profile" routing="path"></UserProfile>;
}
