'use client'
import {Divider} from "@nextui-org/react";
import Sidebar from "@/components/admin/sidebar/sidebar";
import {useState} from "react";
import WebsitesBlock from "@/components/admin/websites-block";
import ArticlesBlock from "@/components/admin/articles-block";
import UsersBlock from "@/components/admin/users-block";

function AdminPage() {
    const [activeCategory, setActiveCategory] = useState("websites")

    function changeActiveCategory(category) {
        setActiveCategory(category)
    }

    return (
        <div className="flex flex-row">
            <div className="flex justify-center w-[20%] h-screen p-2">
                <Sidebar onChangeActiveCategory={changeActiveCategory}/>
            </div>
            <div>
                <Divider className="h-screen mx-2" orientation="vertical"/>
            </div>
            <div className="w-full h-screen p-2">
                {activeCategory === 'websites' && <WebsitesBlock/>}
                {activeCategory === 'articles' && <ArticlesBlock/>}
                {activeCategory === 'users' && <UsersBlock/>}
            </div>
        </div>
    )
}

export default AdminPage;