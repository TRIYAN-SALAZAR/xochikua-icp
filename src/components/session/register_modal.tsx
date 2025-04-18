import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Checkbox,
    Input,
    Link,
} from "@heroui/react";
import { LockIcon, MailIcon } from "../icons/Socials";
import InputOTPnew from "../input/code_read";

interface IniciarSessionModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function RegisterSessionModal({ isOpen, onClose }: IniciarSessionModalProps) {
    return (
        <Modal isOpen={isOpen} placement="top-center" onOpenChange={(open) => !open && onClose()} backdrop="blur">
            <ModalContent>
                <>
                    <ModalHeader className="flex flex-col gap-1">Register</ModalHeader>
                    <ModalBody>
                        <Input
                            endContent={
                                <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            label="Email"
                            placeholder="Enter your email"
                            variant="bordered"
                        />
                        <Input
                            endContent={
                                <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            variant="bordered"
                        />

                        <Input
                            endContent={
                                <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                            }
                            label="Password again"
                            placeholder="Enter your password again"
                            type="password"
                            variant="bordered"
                        />
                        <div>
                            <InputOTPnew />
                        </div>
                        <div className="flex py-2 px-1 justify-between">
                            <Checkbox
                                classNames={{
                                    label: "text-small",
                                }}
                            >
                                Remember me
                            </Checkbox>
                            <Link color="primary" href="#" size="sm">
                                Forgot password?
                            </Link>
                        </div>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" variant="flat" onPress={onClose}>
                            Close
                        </Button>
                        <Button color="primary" onPress={onClose}>
                            Sign in
                        </Button>
                    </ModalFooter>
                </>
            </ModalContent>
        </Modal>
    );
}