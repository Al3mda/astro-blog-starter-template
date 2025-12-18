# AI Assistant ↔ Copilot Integration

نظام تكامل بين المساعد الذكي (Comet) و GitHub Copilot لتنفيذ المهام البرمجية.

## 📋 Overview / نظرة عامة

هذا المجلد يحتوي على نظام تواصل بين:
- **المساعد الذكي**: يكتب المهام المطلوبة في `pending-tasks.json`
- **GitHub Copilot**: ينفذ المهام ويكتب النتائج في `completed-tasks.json`

## 📁 File Structure / هيكل الملفات

```
.copilot/
├── pending-tasks.json      # المهام المطلوبة من المساعد
├── completed-tasks.json    # المهام المنجزة من Copilot
└── README.md              # التوثيق (هذا الملف)
```

## 🔄 Workflow / سير العمل

### 1. المساعد يضيف مهمة جديدة
المساعد الذكي يكتب في `pending-tasks.json`:

```json
{
  "version": "1.0",
  "tasks": [
    {
      "id": "task-001",
      "timestamp": "2025-12-18T16:00:00Z",
      "type": "create",
      "description": "Create a new blog post component",
      "details": {
        "file": "src/components/BlogPost.astro",
        "requirements": [
          "Accept title and content props",
          "Use Tailwind CSS for styling",
          "Support RTL for Arabic content"
        ]
      },
      "priority": "high",
      "status": "pending"
    }
  ]
}
```

### 2. Copilot ينفذ المهمة
GitHub Copilot (أو VS Code extension) يراقب التغييرات وينفذ المهمة.

### 3. Copilot يكتب النتيجة
بعد التنفيذ، يكتب في `completed-tasks.json`:

```json
{
  "version": "1.0",
  "completed": [
    {
      "id": "task-001",
      "completed_at": "2025-12-18T16:05:00Z",
      "status": "success",
      "files_changed": [
        "src/components/BlogPost.astro"
      ],
      "commit": "abc123",
      "notes": "Component created successfully with RTL support"
    }
  ]
}
```

### 4. المساعد يتحقق من النتيجة
المساعد يقرأ `completed-tasks.json` ويتحقق من إنجاز المهمة.

## 🎯 Task Types / أنواع المهام

| النوع | الوصف | Example |
|------|-------|-------|
| `create` | إنشاء ملف جديد | Create component |
| `modify` | تعديل ملف موجود | Update function |
| `fix` | إصلاح مشكلة | Fix bug in component |
| `refactor` | إعادة هيكلة كود | Improve code structure |
| `test` | إضافة اختبارات | Add unit tests |

## ⚙️ Setup / الإعداد

### للمساعد الذكي (AI Assistant):

1. اقرأ `pending-tasks.json` للتحقق من المهام الحالية
2. أضف مهمة جديدة في array الـ `tasks`
3. استخدم GitHub API لعمل commit للتغييرات
4. راقب `completed-tasks.json` للحصول على النتائج

### لـ Copilot / VS Code Extension:

```javascript
// مثال: File watcher في VS Code extension
const watcher = vscode.workspace.createFileSystemWatcher(
  '**/.copilot/pending-tasks.json'
);

watcher.onDidChange(async (uri) => {
  const tasks = await readPendingTasks();
  for (const task of tasks.filter(t => t.status === 'pending')) {
    await executeTask(task);
    await markTaskComplete(task.id);
  }
});
```

## 📊 Task Status / حالات المهام

- `pending`: في انتظار التنفيذ
- `in_progress`: جاري التنفيذ
- `success`: تم بنجاح
- `failed`: فشل التنفيذ
- `cancelled`: تم الإلغاء

## 🔐 Security / الأمان

⚠️ **Important / مهم:**
- لا تضع معلومات حساسة في ملفات المهام
- تأكد أن المهام لا تحتوي على API keys أو passwords
- راجع التغييرات قبل عمل commit

## 🚀 Examples / أمثلة

### Example 1: إنشاء صفحة جديدة

```json
{
  "id": "page-about",
  "type": "create",
  "description": "Create About page in Arabic",
  "details": {
    "file": "src/pages/ar/about.astro",
    "template": "Use existing layout",
    "content": "Add company information"
  }
}
```

### Example 2: إصلاح bug

```json
{
  "id": "fix-rtl",
  "type": "fix",
  "description": "Fix RTL text direction issue",
  "details": {
    "file": "src/components/Header.astro",
    "issue": "Text not displaying correctly in Arabic",
    "solution": "Add dir='rtl' attribute"
  }
}
```

## 🤝 Integration / التكامل

هذا النظام يعمل مع:
- ✅ GitHub API
- ✅ VS Code Extensions
- ✅ GitHub Actions
- ✅ Cloudflare Workers (للـ webhooks)

## 📝 Notes / ملاحظات

- الملفات تستخدم JSON لسهولة القراءة والكتابة
- يمكن استخدام GitHub Actions لتفعيل التنفيذ التلقائي
- النظام يدعم العربية والإنجليزية
- التوقيت بصيغة ISO 8601

## 🐛 Troubleshooting / حل المشاكل

**المشكلة**: المهمة لا تنفذ
- تحقق من صيغة JSON صحيحة
- تأكد أن `status` = `pending`
- راجع ملف النتائج للأخطاء

**المشكلة**: تعارض في الملفات
- استخدم IDs فريدة لكل مهمة
- تأكد من sync مع الريبو

---

**Created by**: AI Assistant (Comet)
**Last Updated**: 2025-12-18
**Version**: 1.0
