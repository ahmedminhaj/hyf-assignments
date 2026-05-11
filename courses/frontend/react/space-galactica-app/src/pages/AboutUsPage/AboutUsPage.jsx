// import styles from './AboutUsPage.module.css';
import OurCrew from './OurCrew';
import OurPartners from './OurPartners';
import OurValues from './OurValues';

// 🧑🏽‍🚀 Task - Week 1
// After you are finished with creating the page, move the OurValues, OurCrew, OurPartners components into their own files in this folder.
// Import and use the components from the newly created files.

// const OurValues = () => {
//   // 🧑🏽‍🚀 Task - Week 1
//   // Create the "Our Values" section.
//   // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
//   // Some inspiration ideas can be found in /data/inspiration_about_us.
//   return (
//     <OurValues />
//   );
// };

// const OurCrew = () => {
//   // 🧑🏽‍🚀 Task - Week 1
//   // Create the "Our Crew section".
//   // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
//   // Use the pictures from /public/crew.
//   // Some inspiration ideas can be found in /data/inspiration_about_us.
//   return (
//     <p> ADD OUR CREW HERE </p>
//   );
// }

// const OurPartners = () => {
//   // 🧑🏽‍🚀 Task - Week 1
//   // Create the "Our Partners section".
//   // Use the descriptions provided in /src/pages/AboutUsPage/README.md.
//   // Use the pictures from /public/business_partners.
//   // Some inspiration ideas can be found in /data/inspiration_about_us.
//   return (
//     <p> ADD OUR PARTNERS HERE </p>
//   );
// }


export const Crew = () => {
  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <section className="card">
          <OurValues />
        </section>
        <section className="card">
          <OurCrew />
        </section>

         {/* 🧑🏽‍🚀 Task - Week 1 */}
         {/* Use the "OurPartners" component here. */}
        <section className="card">
          <OurPartners />
        </section>
      </main>
    </div>
  );
}

export default Crew;
