import { useState } from 'react';
import styled from 'styled-components';
import createHash from '@utils/hash';
import { Theme } from '@components/ThemeProvider';
import FileDropArea from './FileDropArea';
import UploadProgress from './UploadProgress';

const Wrapper = styled.div`
  margin-top: 24px;
  background: ${(props: Theme) => props.theme.colors.background};
  box-shadow: ${(props: Theme) => props.theme.shadow.long};
`;

const UploadList = styled.div``;

const Upload = () => {
  const [files, setFiles] = useState<File[]>([]);

  const prepareFiles = (fileList: FileList) => {
    const fileArray = Array.from(fileList);

    const invalidFiles = fileArray.reduce<File[]>((list, current) => {
      if (current.type !== 'audio/mp3') {
        list.push(current);
      }

      return list;
    }, []);

    if (invalidFiles.length > 0) {
      // error message
      return;
    }

    setFiles(fileArray);
  };

  return (
    <Wrapper>
      {files.length === 0 ? (
        <FileDropArea handler={prepareFiles} />
      ) : (
        <UploadList>
          {files.map((file) => (
            <UploadProgress key={createHash().update(file.name).digest(36)} file={file} />
          ))}
        </UploadList>
      )}
    </Wrapper>
  );
};

export default Upload;
