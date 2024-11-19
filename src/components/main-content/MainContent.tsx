import Navbar from '../navbar/NavbarContainer'
import TableContainer from '../table/TableContainer'

export default function MainContent() {
    return (
        <section className="flex-1 w-[1408px] px-[32px] mx-auto">
            <Navbar />
            <TableContainer />
        </section>
    )
}
