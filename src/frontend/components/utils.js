/* This components handles exports in the main App: */

    /* "layout" components: */
    export { default as Table } from '../../frontend/components/layout/Table.jsx';
    


/* -------------------------------------------------------------------------- */


    /* "pages" components: */

        




/* -------------------------------------------------------------------------- */
/* Functions: */

/* Scroll to top of the page after a user clicks a link: */
export const scrollTop = () => {
    window.scrollTo({ behavior: "smooth", top: "0px"});
};