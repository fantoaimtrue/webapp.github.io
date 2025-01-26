
import asyncio

from aiogram import Bot, Dispatcher
from aiogram.fsm.storage.memory import MemoryStorage

from handlers import start  # Импортируем хэндлер для команды /start



bot = Bot(token='7439911780:AAF-0YhIPfyfKJ54tfSpQXOvQozi0taeTCU')
storage = MemoryStorage()
dp = Dispatcher(storage=storage)



def main():
    dp.include_router(start.router)


    dp.run_polling(bot)


if __name__ == '__main__':
    main()
