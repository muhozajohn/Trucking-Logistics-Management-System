import Welcome from "../components/welcome";
import BlogPage from "./blog/page";
import AboutPage from "./about/page";
import ServicePage from "./services/page";
import Location from "../components/location";

export default function Home() {
  return (
        <main>
          <Welcome />
          <Location />
          <ServicePage />
          <AboutPage />
          <BlogPage />
       </main>
  )
}