import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { $host } from '../../../http';

const CreateType = ({show, onHide}) => {
  const [value, setValue] = useState('')

  const addType = async () => {
    try {
      await $host.post('api/type', {name: value})
      setValue('')
      onHide()
    } catch (e) {
      console.error('Ошибка при создании типа:', e)
    }
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder='Введите название типа...'
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addType}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType; 