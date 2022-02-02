import Filters from "components/layout/filters/Filters";
import Footer from "components/layout/footer/Footer";
import Navbar from "components/layout/navbar/Navbar";
import Button from "components/shared/button/Button";
import ProjectCard from "components/shared/projectCard/ProjectCard";
import React from "react";
import { FaPlus } from "react-icons/fa";

function ProjectsPage() {
  const user = {
    fullName: "سامح أشرف",
    profileImage: "",
    username: "sameh_ashraf",
  };
  const project = {
    title: "مطلوب خبير وكاتب محتوى سيو SEO",
    summary:
      "محتاج شخص يكتب الي محتوى المنتجات ويضبط السيو المتجر كامل الاتفاق راح يكون على حسب المنتجات الموجوده بلمتجر المتجر متخصص في العطور والتجميل والهدايا احتاج وصف حصري على كل منتج المنتجات ٨٠%عليها وص",
    status: "تحت التنفيذ",
    createdAt: Date.now() / 1000,
    location: "مصر",
    proposalsCount: 10,
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto my-12 md:max-w-screen-xl px-4">
        <div className="mb-12 flex flex-col sm:flex-row justify-center gap-6 sm:gap-0 sm:justify-between items-center">
          <h1 className="text-xl sm:text-2xl font-base sm:font-medium">المشاريع المفتوحة</h1>
          <a href="https://">
            <Button>
              <FaPlus className="ml-2" />
              أضف مشروعك الآن
            </Button>
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="filters w-full md:w-[450px]">
            <Filters />
          </div>
          <div className="projects-list w-full">
            <ProjectCard user={user} project={project} />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProjectsPage;
