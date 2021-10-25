import Tables from "../../../common/tables";
import PanelAdmin from "../../../layout/adminlayout";


const Members = () => {
    return (
        <PanelAdmin>
            <h5 className="mb-4">کاربران</h5>
            <Tables />
        </PanelAdmin>
    );
}

export default Members;



const fields = [
    {
        th:"شناسه",
        td:""
    }
]