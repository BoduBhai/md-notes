import BBX from "@/components/BBX";
import Editor from "@/components/Editor";
import SideNav from "@/components/SideNav";

export default function NotesPage() {
    const isViewer = true;

    return (
        <main id='notes'>
            <SideNav />
            {!isViewer && <Editor isViewer={isViewer} />}
            {isViewer && <BBX />}
        </main>
    );
}
