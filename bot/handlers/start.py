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
    @router.message(Command(commands=["report"]))
    async def cmd_report(message: Message):
        await message.answer("Пожалуйста, заполните форму для получения отчета.")

@router.message(lambda message: message.text.startswith("report_data:"))
async def handle_report_data(message: Message):
    report_data = message.text[len("report_data:"):].strip()
    # Здесь вы можете обработать данные отчета, например, сохранить их в БД
    await message.answer(f"Данные отчета получены: {report_data}")