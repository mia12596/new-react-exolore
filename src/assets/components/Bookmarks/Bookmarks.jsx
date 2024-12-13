// import Selected from "../Selected/Selected";


// const Bookmarks = ({ bookmark }) => {
//     return (
//         <div className="md:w-1/3">
//             <h3>Bookmarks: {bookmark.length}</h3>
//             {
//                 bookmark.map(selected => <Selected selected={selected}></Selected>)
//             }
//         </div>
//     );
// };

// export default Bookmarks;

import Selected from "../Selected/Selected";

const Bookmarks = ({ bookmark, limit }) => {
    return (
        <div className="md:w-1/3">
            {/* Display the current count out of the static limit */}
            <h3>Bookmarks: {bookmark.length}/{limit}</h3>

            {/* Display the selected bookmarks */}
            {
                bookmark.map(selected => (
                    <Selected key={selected.id} selected={selected}></Selected>
                ))
            }
        </div>
    );
};

export default Bookmarks;
