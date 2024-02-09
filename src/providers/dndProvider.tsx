import {ReactNode, DragEvent, useState} from "react";
import {useChangeFolder} from "../hooks/folderHooks/useChangeFolder.ts";
import {QueryCache} from "@tanstack/react-query";
import {useGetFolder} from "../hooks/folderHooks/useGetFolder.ts";

const DndProvider = ({children, folderId, name, refetch, parentFolderId}: {
    children: ReactNode,
    folderId: string,
    name: string,
    refetch: any,
    parentFolderId: string,
}) => {

    const [dropFolderId, setDropFolderId] = useState<string>('')

    const [nameToDrop, setNameToDrop] = useState<string>('')

    const [parentId, setParentId] = useState('')

    const {refetch: refetchParent} = useGetFolder(parentId || 'root')

    const {changeFolder, isSuccess} = useChangeFolder({name: nameToDrop, parentId: folderId}, dropFolderId, refetch, refetchParent)

    const handleOnDragStart = (e: DragEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.target.children[0].className = 'folder disabled'
        e.dataTransfer.setData('parentId', parentFolderId)
        e.dataTransfer.setData('id', folderId)
        e.dataTransfer.setData('name', name)
    }

    const handleOnDragEnd = (e: DragEvent<HTMLDivElement>) => {
        e.target.children[0].className = 'folder'
    }

    const handleOnDragOver = (e: DragEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()
    }

    const handleOnDrop = (e: DragEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()
        setDropFolderId(e.dataTransfer.getData('id'))
        setNameToDrop(e.dataTransfer.getData('name'))
        setParentId(e.dataTransfer.getData('parentId'))
        changeFolder()
    }

    return (
        <div
            id={folderId}
            onDragStart={(e: DragEvent<HTMLDivElement>) => handleOnDragStart(e)}
            onDragEnd={(e: DragEvent<HTMLDivElement>) => handleOnDragEnd(e)}
            onDragOver={(e: DragEvent<HTMLDivElement>) => handleOnDragOver(e)}
            onDrop={(e: DragEvent<HTMLDivElement>) => handleOnDrop(e, name)}
            draggable={true}
        >
            {children}
        </div>
    )
}

export default DndProvider