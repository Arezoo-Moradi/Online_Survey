from survey.models import Survey
from survey.forms import *
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import UpdateView, ListView, CreateView
from django.shortcuts import redirect
from django.urls import reverse


# def test_view(request):
#     if request.method == 'POST':
#         form = TestForm(request.POST)
#         if form.is_valid():
#             # obj = Post()
#             # obj.title = form.cleaned_data['title']
#             # obj.author = request.user
#             # obj.body = form.cleaned_data['body']
#             # obj.save()
#             # post = form.save(commit=False)
#             # post.author = request.user
#             # post.save()
#             # return redirect('home')
#             return HttpResponse("ok")
#     else:
#         form = TestForm()
#     return render(request, 'survey/test.html', {'form':form})

# class SurveyCreateView(CreateView):
#     form_class = SurveyForm
#     template_name = 'survey/test.html'
#
#     def get_context_data(self, **kwargs):
#         context = super(SurveyCreateView, self).get_context_data(**kwargs)
#
#         context['survey_meta_formset'] = SurveyMetaInlineFormset()
#         return context
#
#     def post(self, request, args= None, *kwargs):
#         self.object = None
#         form_class = self.get_form_class()
#         form = self.get_form(form_class)
#         survey_meta_formset = SurveyMetaInlineFormset(self.request.POST)
#         if form.is_valid() and survey_meta_formset.is_valid():
#             return self.form_valid(form, survey_meta_formset)
#         else:
#             return self.form_invalid(form, survey_meta_formset)
#
#     def form_valid(self, form, survey_meta_formset):
#         self.object = form.save(commit=False)
#         self.object.save()
#         # saving ProductMeta Instances
#         survey_metas = survey_meta_formset.save(commit=False)
#         for meta in survey_metas:
#             meta.survey = self.object
#             meta.save()
#         return redirect(reverse("survey-list"))
#
#     def form_invalid(self, form, survey_meta_formset):
#         return self.render_to_response(
#             self.get_context_data(form=form,
#                                   survey_meta_formset=survey_meta_formset
#                                   )
#         )

class SurveyCreateView(CreateView):
    form_class = SurveyForm
    template_name = 'survey/test.html'

    def get_context_data(self, **kwargs):
        context = super(SurveyCreateView, self).get_context_data(**kwargs)

        context['category_meta_formset'] = CategoryMetaInlineFormset()
        context['question_meta_formset'] = QuestionMetaInlineFormset()
        return context

    def post(self, request, args=None, *kwargs):
        self.object = None
        form_class = self.get_form_class()
        form = self.get_form(form_class)
        category_meta_formset = CategoryMetaInlineFormset(self.request.POST)
        question_meta_formset = QuestionMetaInlineFormset(self.request.POST)
        print('form', form.is_valid())
        print('category', category_meta_formset.is_valid())
        print('question', question_meta_formset.is_valid())
        if form.is_valid() and question_meta_formset.is_valid():
            return self.form_valid(form, category_meta_formset, question_meta_formset)
        else:
            return self.form_invalid(form, category_meta_formset, question_meta_formset)

    def form_valid(self, form, category_meta_formset, question_meta_formset):
        print('*************************')
        self.object = form.save(commit=False)
        self.object.save()
        # saving ProductMeta Instances
        survey_category_metas = category_meta_formset.save(commit=False)
        survey_question_metas = question_meta_formset.save(commit=False)
        for category in survey_category_metas:
            category.survey = self.object
            category.save()
        for question in survey_question_metas:
            question.survey = self.object
            question.save()
        return redirect(reverse("survey-list"))

    def form_invalid(self, form, category_meta_formset, question_meta_formset):
        print('???????????????????????')
        return self.render_to_response(
            self.get_context_data(form=form,
                                  category_meta_formset=category_meta_formset,
                                  question_meta_formset=question_meta_formset,
                                  )
        )