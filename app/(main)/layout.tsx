import { NavigationSidebar } from "@/components/navigation/navigation-siedebar";
import { Separator } from "@/components/ui/separator";

const MainLayout = async ({
    children
}:{
    children: React.ReactNode;
}) => {
    return (  
        <div className="h-full">
            <div className="hidden md:flex h-full w-[72px]
            z-30 flex-col fixed insert-y-0">
                <NavigationSidebar/>
                <Separator
                className="h-[2px] bg-zinc-300 dark:bg-zinc-700"/>
            </div>
            <main className="md:pl-[72px] h-full">
            {children}
            </main>
        </div>
    );
}
 
export default MainLayout;