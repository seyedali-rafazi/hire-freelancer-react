import SearchBar from "./SearchBar";

function SearchProjects() {
  return (
    <div className="my-10 animate-fade-in-up">
      <h1 className="font-black text-secondery-800 text-2xl md:text-3xl mb-2">
        دنبال چه پروژه‌ای می‌گردید؟
      </h1>
      <p className="text-secondery-500 mb-6">
        از میان صدها پروژه، مناسب‌ترین را پیدا کنید
      </p>
      <SearchBar />
    </div>
  );
}

export default SearchProjects;
