import { ReactNode } from "react"
import { default as DefaultModal} from 'react-modal'
import { useData } from "../hooks"

type ModelProps = {
    children: ReactNode,
    label: string
}

DefaultModal.setAppElement("#root")

export function Modal({ children, label }: ModelProps) {
    const { privacyPolicyIsOpen, setPrivacyPolicyIsOpen, local } = useData()
    const closeModal = (event: React.MouseEvent<any>) => {
        setPrivacyPolicyIsOpen(false)
    }
    return (
        <DefaultModal
            isOpen={privacyPolicyIsOpen}
            contentLabel={label}
            onRequestClose={closeModal}
            style={{
                content: {
                    top: "10rem",
                    bottom: "2rem",
                    borderRadius: "2rem",
                    background: local === "dark" ? "#111111" : "#f3f6f6",
                    overflow: "auto",
                    border: "none",
                }
            }}
            >
            {children}
        </DefaultModal>
    )
}