import { $authHost, $host } from "./index";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand')
    return data
}

export const createDevice = async (device) => {
    const {data} = await $authHost.post('api/device', device)
    return data
}

export const fetchDevice = async (typeId, brandId, page, limit) => {
    const {data} = await $host.get('api/device', {params: {
        typeId, brandId, page, limit
    }})
    return data
}
export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/device/' + id)
    return data
}

export const createUpdate = async (update) => {
    const {data} = await $host.post('api/fix/add-update', update)
    return data
}
export const addToBasket = async (userId, deviceId) => {
    const response = await $host.post('api/basket/add', {
        userId: userId,
        deviceId: deviceId,
    });

    return response.data;
};
export const fetchBasket = async () => {
    try {
        const response = await $host.get('api/get-basket');
        if (response.ok) {
            const basketData = await response.json();
            return basketData;
        } else {
            console.error('Не удалось получить содержимое избранного');
            return null;
        }
    } catch (error) {
        console.error('Ошибка при получении содержимого избранного', error);
        return null;
    }
};
export const fetchFavourites = async (userId) => {
    try {
        const response = await $host.get(`/api/basket/get-cart?userId=${userId}`);
        // Проверьте, что данные являются объектом с полем basket_devices
        return response.data.basket_devices || [];
    } catch (error) {
        console.error('Error fetching favourites:', error);
        throw error;
    }
};
export const removeFromCart = async (basketId, deviceId) => {
    try {
        await $host.delete(`/api/basket/remove-from-cart?basketId=${basketId}&deviceId=${deviceId}`);
    } catch (error) {
        console.error('Error removing item from cart:', error);
        throw error;
    }
};
export const fetchComments = async (deviceId) => {
    try {
        const response = await $host.get(`api/comment/get-comments/${deviceId}`);
        const comments = response.data.map(comment => {
            // Включаем информацию о пользователе в комментарий
            return {
                ...comment,
                user: comment.user || {} // Предотвращаем ошибку, если информация о пользователе отсутствует
            };
        });
        console.log('Comments data from fetchComments:', comments);
        return comments;
    } catch (error) {
        console.error(error);
    }
};

export const fetchUpdates = async (setUpdates) => {
    try {
      const response = await $host.get('/api/fix/get-updates');
      setUpdates(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Ошибка получения данных:', error);
    }
  };
export const fetchSponsors = async (setSponsors) => {
    try {
      const response = await $host.get('/api/sponsor/get-sponsors');
      setSponsors(response.data);
    } catch (error) {
      console.error('Ошибка при получении списка спонсоров:', error);
    }
  };
  export const fetchAboutUs = async (setAbout) => {
    try {
      const response = await $host.get('/api/feedback/get-aboutus');
      setAbout(response.data);
    } catch (error) {
      console.error('Ошибка при получении списка обратной связи:', error);
    }
  };
export const deleteBrand = (brandId) => {
    return $host.delete(`/api/brand/${brandId}`);
};
export const deleteType = (typeId) => {
    return $host.delete(`/api/type/${typeId}`);
};
export const deleteDevice = async (deviceId) => {
    return $host.delete(`/api/device/${deviceId}`);
};
export const deleteUpdate = async (updateId) => {
    return $host.delete(`/api/fix/del-update/${updateId}`);
};
export const fetchDevice2 = async (typeId, brandId, page, limit) => {
    try {
      const response = await $host.get('api/device', {
        params: { typeId, brandId, page, limit },
      });
      return response.data.rows; 
    } catch (error) {
      console.error('Ошибка при получении устройств:', error);
      throw error;
    }
  };

// Функция для отправки запроса на сервер для очистки истории сообщений
export const clearHistory = async (userId) => {
    try {
        const response = await $host.delete(`/api/supp/clear-history/${userId}`);
        return response.data; 
    } catch (error) {
        throw error;
    }
};
