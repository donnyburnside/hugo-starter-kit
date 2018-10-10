{
    "title": "{{ replace .TranslationBaseName "-" " " | title }}",
    "description": "",
    "date": "{{ .Date }}",
    "draft": true,
    "menu": {
        "main": {
            "identifier": "{{ lower (replace .TranslationBaseName "-" " " | title) }}",
            "weight": 0
        }
    }
}
