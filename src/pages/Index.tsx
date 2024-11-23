import Header from "../components/Layouts/Header";
import Hero from "../components/Layouts/Hero";
import Portfolio from "../components/Layouts/myPortfolio";
import ExperienceTimeline  from "../components/Layouts/experince";
import ExploreMyStory from "../components/Layouts/mystroy";

const Index = () => {

    return (
        <div>
            <Header />
            <Hero />

            <ExploreMyStory />
            <ExperienceTimeline />
            <Portfolio />
        </div>
    );
};

export default Index;
