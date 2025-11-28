---
layout: default
---

<div class="container-lg px-3 my-5 markdown-body">

# 👋 欢迎来到我的博客

这里是我记录技术、生活和随想的地方。

## 📝 最新文章

{% for post in site.posts %}
### [{{ post.title }}]({{ post.url }})
<span class="text-gray-light" style="font-size: 14px;">{{ post.date | date: "%Y-%m-%d" }}</span>

{{ post.excerpt }}

[阅读全文 →]({{ post.url }})
<hr>
{% endfor %}

</div>
