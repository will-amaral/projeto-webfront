/* eslint-disable react/no-array-index-key */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { useDropzone } from 'react-dropzone';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Typography,
  makeStyles,
} from '@material-ui/core';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import MoreIcon from '@material-ui/icons/MoreVert';
import addFile from 'utils/assets/addFile.svg';
import addVideo from 'utils/assets/addVideo.svg';
import addAudio from 'utils/assets/addAudio.svg';
import addPhoto from 'utils/assets/addPhoto.svg';

const useStyles = makeStyles((theme) => ({
  root: {},
  dropZone: {
    border: `1px dashed ${theme.palette.divider}`,
    padding: theme.spacing(6),
    outline: 'none',
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      opacity: 0.5,
      cursor: 'pointer',
    },
  },
  dragActive: {
    backgroundColor: theme.palette.action.active,
    opacity: 0.5,
  },
  image: {
    width: 130,
  },
  info: {
    marginTop: theme.spacing(1),
  },
  list: {
    maxHeight: 320,
  },
  actions: {
    marginTop: theme.spacing(2),
    display: 'flex',
    justifyContent: 'flex-end',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function FilesDropzone(props) {
  const { className, photo, video, audio, accept, files, setFiles, ...rest } = props;
  const classes = useStyles();

  const handleDrop = useCallback(
    (acceptedFiles) => {
      setFiles((prevFiles) => [...prevFiles].concat(acceptedFiles));
    },
    [setFiles]
  );

  const handleRemoveAll = () => {
    setFiles([]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <div
        className={clsx({
          [classes.dropZone]: true,
          [classes.dragActive]: isDragActive,
        })}
        {...getRootProps()}
      >
        <input {...getInputProps()} accept={accept} />
        <div>
          <img
            alt='Select file'
            className={classes.image}
            src={video ? addVideo : audio ? addAudio : photo ? addPhoto : addFile}
          />
        </div>
        <div>
          <Typography gutterBottom variant='h3'>
            Selecionar {video ? 'Vídeo' : audio ? 'Áudio' : photo ? 'Imagem' : 'Arquivo'}
          </Typography>
          <Box mt={2}>
            <Typography color='textPrimary' variant='body1'>
              Arraste seu arquivo para essa área ou
              <Link underline='always'> clique aqui</Link> para procurar em seu computador
            </Typography>
          </Box>
        </div>
      </div>
      {files.length > 0 && (
        <>
          <PerfectScrollbar options={{ suppressScrollX: true }}>
            <List className={classes.list}>
              {files.map((file, i) => (
                <ListItem divider={i < files.length - 1} key={i}>
                  <ListItemIcon>
                    <FileCopyIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={file.name}
                    primaryTypographyProps={{ variant: 'h5' }}
                  />
                  <Tooltip title='More options'>
                    <IconButton edge='end'>
                      <MoreIcon />
                    </IconButton>
                  </Tooltip>
                </ListItem>
              ))}
            </List>
          </PerfectScrollbar>
          <div className={classes.actions}>
            <Button onClick={handleRemoveAll} size='small'>
              Remover arquivos
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

FilesDropzone.propTypes = {
  className: PropTypes.string,
};

export default FilesDropzone;
