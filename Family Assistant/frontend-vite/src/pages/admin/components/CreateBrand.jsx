import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { $host } from '../../../http';

const CreateBrand = ({show, onHide}) => {
  const [value, setValue] = useState('')

  const addBrand = async () => {
    try {
      await $host.post('api/brand', {name: value})
      setValue('')
      onHide()
    } catch (e) {
      console.error('Ошибка при создании бренда:', e)
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
          Добавить новый бренд
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder='Введите название бренда...'
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-success' onClick={addBrand}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand; 