
const SectionIntro = ({ sectionHeader, sectionDescreption}) => {
    return (
        <div className="w-full max-w-2xl mx-auto px-4 py-8 text-center">
            <h1 className="font-bold w-full mx-auto">{sectionHeader}</h1>
            <p className="w-full my-4 text-lg">{sectionDescreption}</p>
        </div>
    );
};

export default SectionIntro;