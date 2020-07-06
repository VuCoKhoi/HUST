import React, { useEffect, useState, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import { makeStyles } from '@material-ui/core';

import FlexBox from '../components/FlexBox';
import { RootContext } from '../context_api';

const useStyles = makeStyles(theme => ({
  root: props => ({
    marginTop: 10,
    padding: props.isDesktop ? '0 50px' : '0 10px',
    flexDirection: 'column',
    alignItems: 'center',
  }),
  dropzone: {
    border: '1px dashed rgba(0,0,0,0.3)',
    backgroundColor: 'rgba(0,0,0,0.05)',
    width: '100%',
    padding: 5,
  },
  thumbContainer: props => ({
    marginTop: 10,
    height: 130,
    maxWidth: '90vw',
    overflow: 'auto',
  }),
  image: {
    height: '100%',
    width: 'auto',
  },
  thumbItem: {
    marginRight: 20,
    '&:hover': {
      border: `2px solid ${theme.palette.active.A400}`,
      borderBox: 'box-sizing',
    },
  },
}));

const Thumb = ({ files }) => {
  const classes = useStyles();
  return files.map(file => (
    <FlexBox className={classes.thumbItem}>
      <img src={file.preview} className={classes.image} alt={file.name} />
    </FlexBox>
  ));
};

function Upload({ isMobile }) {
  const { matchMobile } = useContext(RootContext);

  const isDesktop = !(isMobile || matchMobile);

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles([
        ...acceptedFiles.map(file =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
        ...files,
      ]);
    },
    multiple: true,
  });

  // useEffect(
  //   () => () => {
  //     // Make sure to revoke the data uris to avoid memory leaks
  //     files.forEach(file => URL.revokeObjectURL(file.preview));
  //   },
  //   [files],
  // );

  const classes = useStyles({ isDesktop });
  return (
    <FlexBox className={classes.root}>
      <div {...getRootProps({ className: classes.dropzone })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <FlexBox className={classes.thumbContainer}>
        <Thumb files={files} />
      </FlexBox>
    </FlexBox>
  );
}

export default Upload;
