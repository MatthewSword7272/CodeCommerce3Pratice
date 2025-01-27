
interface SideContentProps {
    title: string;
    paragraph: string;
    children?: React.ReactNode;
}

const SideContent = ({title, paragraph, children : buttons} : SideContentProps) => {
  return (
    <div className="space-y-4">
        <h3 className="">{title}</h3>
        <p className={""}>
         {paragraph}
        </p>
        <div className="space-x-4">
            {buttons}
        </div>
      </div>
  )
}

export default SideContent