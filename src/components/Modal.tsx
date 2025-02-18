import { useEffect, useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [modalVisible, setModalVisible] = useState(isOpen);

  const closeModal = () => {
    setModalVisible(false);
    onClose();
  };

  useEffect(() => {
    setModalVisible(isOpen);
  }, [isOpen]);

  return (
    <>
      {modalVisible && (
        <div className="fixed left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-black bg-opacity-70">
          <div className="flex h-1/3 w-4/5 flex-col justify-between rounded-xl bg-gray-700 p-5">
            <div className="flex flex-row justify-between">
              <p className="text-white">
                목표를 달성했나요?
                <br /> 인증 사진을 남겨보세요
              </p>
              <div className="text-lg" onClick={onClose}>
                <svg
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="20"
                  height="20"
                  viewBox="0 0 30 30"
                >
                  <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z" />
                </svg>
              </div>
            </div>
            <div className="w h-1/2 w-1/2 items-center place-self-center rounded-xl bg-gray-400" />
            <button className="bg-white text-black" onClick={closeModal}>
              확인
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
