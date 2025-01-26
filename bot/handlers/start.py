from aiogram import Router
from aiogram.types import Message
from aiogram.filters import Command
from keyboards.default import kb_report

router = Router()

# Инициализация подключения к БД
db_pool = None

@router.message(Command(commands=["start"]))
async def cmd_start(message: Message):
    await message.answer("Для получения отчета введите /report")
