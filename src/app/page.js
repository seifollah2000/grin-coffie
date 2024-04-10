import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Articles from "@/components/templates/index/articles/Articles";
import Banner from "@/components/templates/index/banner/Banner";
import Latest from "@/components/templates/index/latest/Latest";
import Readable from "@/components/templates/index/readable/Readable";

const page = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Latest />
      <Readable />
      <Articles />
      <Footer />
    </>
  );
};

export default page;
